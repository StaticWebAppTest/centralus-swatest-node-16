module.exports = async function (context, req) {
  const date = "2022-10-12T12:27:09.430Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

