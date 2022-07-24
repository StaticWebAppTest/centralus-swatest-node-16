module.exports = async function (context, req) {
  const date = "2022-07-24T08:13:24.651Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

