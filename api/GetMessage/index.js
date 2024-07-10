module.exports = async function (context, req) {
  const date = "2024-07-10T19:09:45.713Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

