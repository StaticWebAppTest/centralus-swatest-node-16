module.exports = async function (context, req) {
  const date = "2023-12-25T05:09:52.528Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

