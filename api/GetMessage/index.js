module.exports = async function (context, req) {
  const date = "2023-12-25T23:09:06.605Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

