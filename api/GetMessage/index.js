module.exports = async function (context, req) {
  const date = "2022-06-13T15:16:54.578Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

