module.exports = async function (context, req) {
  const date = "2022-09-11T18:13:52.133Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

