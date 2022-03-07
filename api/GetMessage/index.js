module.exports = async function (context, req) {
  const date = "2022-03-07T05:09:38.401Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

