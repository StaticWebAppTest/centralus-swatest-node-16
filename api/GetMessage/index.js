module.exports = async function (context, req) {
  const date = "2024-10-11T23:11:06.173Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

