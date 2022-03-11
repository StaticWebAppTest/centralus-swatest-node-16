module.exports = async function (context, req) {
  const date = "2022-03-11T20:10:40.133Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

