module.exports = async function (context, req) {
  const date = "2022-02-24T13:15:13.099Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

