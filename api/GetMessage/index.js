module.exports = async function (context, req) {
  const date = "2023-04-16T21:07:23.133Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

