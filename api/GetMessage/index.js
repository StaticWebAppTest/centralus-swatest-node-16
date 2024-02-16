module.exports = async function (context, req) {
  const date = "2024-02-16T16:11:07.358Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

