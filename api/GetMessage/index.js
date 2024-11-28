module.exports = async function (context, req) {
  const date = "2024-11-28T06:18:16.411Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

