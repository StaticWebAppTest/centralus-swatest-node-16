module.exports = async function (context, req) {
  const date = "2023-03-04T21:07:57.757Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

