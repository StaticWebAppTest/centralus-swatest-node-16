module.exports = async function (context, req) {
  const date = "2024-11-01T14:11:18.731Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

