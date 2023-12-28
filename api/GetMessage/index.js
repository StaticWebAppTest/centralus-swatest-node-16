module.exports = async function (context, req) {
  const date = "2023-12-28T14:08:14.149Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

