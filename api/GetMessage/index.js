module.exports = async function (context, req) {
  const date = "2024-02-13T09:09:13.484Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

