module.exports = async function (context, req) {
  const date = "2022-05-28T16:16:03.149Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

