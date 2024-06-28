module.exports = async function (context, req) {
  const date = "2024-06-28T13:11:25.036Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

