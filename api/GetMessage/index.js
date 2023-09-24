module.exports = async function (context, req) {
  const date = "2023-09-24T16:09:50.767Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

