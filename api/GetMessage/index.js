module.exports = async function (context, req) {
  const date = "2024-07-08T23:10:16.731Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

