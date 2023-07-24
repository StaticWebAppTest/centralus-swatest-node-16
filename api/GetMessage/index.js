module.exports = async function (context, req) {
  const date = "2023-07-24T15:09:36.651Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

