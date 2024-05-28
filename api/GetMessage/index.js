module.exports = async function (context, req) {
  const date = "2024-05-28T05:09:44.605Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

