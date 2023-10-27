module.exports = async function (context, req) {
  const date = "2023-10-27T14:07:56.533Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

