module.exports = async function (context, req) {
  const date = "2023-04-25T13:12:32.133Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

