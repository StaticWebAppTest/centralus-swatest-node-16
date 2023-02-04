module.exports = async function (context, req) {
  const date = "2023-02-04T16:11:46.449Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

