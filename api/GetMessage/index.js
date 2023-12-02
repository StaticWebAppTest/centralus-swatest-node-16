module.exports = async function (context, req) {
  const date = "2023-12-02T05:08:09.863Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

