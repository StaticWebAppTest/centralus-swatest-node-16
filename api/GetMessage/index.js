module.exports = async function (context, req) {
  const date = "2022-12-02T06:12:40.088Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

