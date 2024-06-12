module.exports = async function (context, req) {
  const date = "2024-06-12T09:11:06.987Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

