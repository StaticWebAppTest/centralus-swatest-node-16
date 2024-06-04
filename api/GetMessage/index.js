module.exports = async function (context, req) {
  const date = "2024-06-04T14:09:54.605Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

