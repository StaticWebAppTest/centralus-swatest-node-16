module.exports = async function (context, req) {
  const date = "2023-11-24T19:07:09.398Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

