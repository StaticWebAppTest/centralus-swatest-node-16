module.exports = async function (context, req) {
  const date = "2023-07-23T14:07:08.897Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

