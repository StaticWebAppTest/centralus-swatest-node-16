module.exports = async function (context, req) {
  const date = "2022-05-14T15:11:07.733Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

