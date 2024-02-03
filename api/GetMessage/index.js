module.exports = async function (context, req) {
  const date = "2024-02-03T10:08:30.133Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

