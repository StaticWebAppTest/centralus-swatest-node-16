module.exports = async function (context, req) {
  const date = "2022-05-10T08:19:53.452Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

