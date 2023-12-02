module.exports = async function (context, req) {
  const date = "2023-12-02T06:11:28.449Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

