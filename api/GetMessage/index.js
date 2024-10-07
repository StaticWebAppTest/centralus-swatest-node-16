module.exports = async function (context, req) {
  const date = "2024-10-07T10:13:22.731Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

