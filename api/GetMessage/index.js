module.exports = async function (context, req) {
  const date = "2023-06-23T14:09:45.149Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

