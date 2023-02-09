module.exports = async function (context, req) {
  const date = "2023-02-09T07:09:09.430Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

