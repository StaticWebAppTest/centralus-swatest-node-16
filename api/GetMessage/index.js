module.exports = async function (context, req) {
  const date = "2023-11-24T20:09:21.651Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

