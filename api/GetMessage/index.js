module.exports = async function (context, req) {
  const date = "2024-08-10T13:11:45.120Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

