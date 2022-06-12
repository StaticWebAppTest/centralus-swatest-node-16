module.exports = async function (context, req) {
  const date = "2022-06-12T09:10:55.133Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

