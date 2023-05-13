module.exports = async function (context, req) {
  const date = "2023-05-13T21:07:06.565Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

