module.exports = async function (context, req) {
  const date = "2024-05-31T09:11:48.731Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

