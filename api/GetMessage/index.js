module.exports = async function (context, req) {
  const date = "2023-03-30T14:09:03.503Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

