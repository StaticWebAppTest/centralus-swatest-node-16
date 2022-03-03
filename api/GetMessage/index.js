module.exports = async function (context, req) {
  const date = "2022-03-03T05:09:18.149Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

