module.exports = async function (context, req) {
  const date = "2023-02-16T09:10:18.668Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

