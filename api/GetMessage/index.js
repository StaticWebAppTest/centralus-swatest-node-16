module.exports = async function (context, req) {
  const date = "2022-06-11T05:09:10.441Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

