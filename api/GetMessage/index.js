module.exports = async function (context, req) {
  const date = "2022-03-09T05:09:53.831Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

