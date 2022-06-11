module.exports = async function (context, req) {
  const date = "2022-06-11T02:52:11.648Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

