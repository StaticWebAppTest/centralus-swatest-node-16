module.exports = async function (context, req) {
  const date = "2024-06-04T12:18:27.731Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

