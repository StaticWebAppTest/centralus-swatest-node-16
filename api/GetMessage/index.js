module.exports = async function (context, req) {
  const date = "2023-09-14T22:07:52.767Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

