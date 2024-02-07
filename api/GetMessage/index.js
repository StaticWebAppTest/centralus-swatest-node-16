module.exports = async function (context, req) {
  const date = "2024-02-07T06:11:40.449Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

